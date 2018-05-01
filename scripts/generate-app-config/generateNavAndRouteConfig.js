const ImportAggregator = require('./generation-objects/ImportAggregator');

const RoutingMenu = 'terra-application-layout/lib/menu/RoutingMenu';
const Components = '../../lib/app/components/Components';
const Home = '../../lib/app/components/Home';

const buildComponent = (Component, configuredProps) => (
  {
    default: {
      componentClass: Component,
      props: configuredProps,
    },
  }
);

const buildMenuConfig = (component, menuComponent, exampleType, pathRoot = '') => {
  let generatedConfig = {};
  const path = pathRoot + component.path;
  const examples = component[exampleType];

  if (examples) {
    // create menu items to add to this menu
    const menuItems = examples.map((subComponent) => {
      const { generatedConfig: subMenu, alternatePath } = buildMenuConfig(subComponent, menuComponent, exampleType, path);
      const subComponentPath = path + subComponent.path;
      // add any generated menus to the overall config
      if (subMenu) {
        generatedConfig = Object.assign(generatedConfig, subMenu);
      }
      return {
        text: subComponent.name,
        path: alternatePath !== undefined ? alternatePath : subComponentPath,
        hasSubMenu: subMenu !== undefined,
      };
    });

    // Do not create a submenu for the component if the component has one site page with no additional sub-nav and it's not a test route.
    if (menuItems.length === 1 && examples[0][exampleType] === undefined && exampleType !== 'tests') {
      return { generatedConfig: undefined, alternatePath: menuItems[0].path };
    }

    const componentMenuProps = { title: component.name, menuItems };
    generatedConfig[path] = {
      path,
      component: buildComponent(menuComponent, componentMenuProps),
    };

    return { generatedConfig, alternatePath: undefined };
  }

  return { generatedConfig: undefined, alternatePath: undefined };
};

const buildLinksMenuConfig = (componentConfig, link, routeImporter) => {
  // build content configuration
  // If there is a custom menu item, use that.
  let menuComponent = routeImporter.addImport(RoutingMenu);
  if (link.menuComponent) {
    menuComponent = link.menuComponent;
  }

  const component = {
    name: link.text,
    path: '',
    [link.exampleType]: Object.values(componentConfig).filter(item => item[link.exampleType] !== undefined),
  };

  // Manipulate the link config to build out the first level menu item.
  const { generatedConfig } = buildMenuConfig(
    component,
    menuComponent,
    link.exampleType,
    link.path,
  );

  return generatedConfig;
};

const routeConfiguration = (siteConfig, componentConfig) => {
  const routeImporter = new ImportAggregator();
  const { navConfig, placeholderSrc, readMeContent } = siteConfig;

  const navigation = navConfig.navigation;
  const configuredLinks = [];

  const content = {};
  let menu = {};

  const validLinks = navigation.links ? navigation.links.filter(link => link.path && link.text && link.exampleType) : [];

  validLinks.forEach((link) => {
    const exampleType = link.exampleType;

    // build navigation link configuration
    if (exampleType !== 'tests') {
      configuredLinks.push({
        path: link.path,
        text: link.text,
        hasSubNav: link.hasSubNav,
      });
    }

    // build content configuration
    let contentComponent = routeImporter.addImport(link.component ? link.component : Components);
    let componentProps = { config: Object.values(componentConfig), pathRoot: link.path, exampleType, placeholderSrc };
    if (exampleType === 'home' && !link.component) {
      contentComponent = routeImporter.addImport(Home);
      componentProps = { readMeContent };
    }

    content[link.path] = {
      path: link.path,
      component: buildComponent(contentComponent, componentProps),
    };

    if (link.hasSubNav) {
      menu = Object.assign(menu, buildLinksMenuConfig(componentConfig, link, routeImporter));
    }
  });

  // const navigationConfig = { index: navigation.index, links: configuredLinks, extensions: navigation.extensions };
  const routeConfig = { content, menu };

  // console.log('componentsToRequire', componentsToRequire);

  return {
    routes: {
      config: routeConfig,
      imports: routeImporter,
    },
    navigation: {
      config: configuredLinks,
    },
    indexPath: navigation.index,
  };
};

module.exports = routeConfiguration;
