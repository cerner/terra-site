import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, matchPath } from 'react-router-dom';
import { withDisclosureManager, disclosureManagerShape } from 'terra-application/lib/disclosure-manager';
import ApplicationNavigation from 'terra-application-navigation';
// import Image from 'terra-image';
import IconTile from 'terra-icon/lib/icon/IconTile';
import IconSearch from 'terra-icon/lib/icon/IconSearch';

import DevSitePage from './_DevSitePage';
import SettingsPicker from './_SettingsPicker';
import ApplicationSwitcher from './_ApplicationSwitcher';
import Search from './_Search';
import NotFoundPage from '../static-pages/_NotFoundPage';

const propTypes = {
  /**
   * The title branding of the site.
   */
  nameConfig: PropTypes.shape({
    accessory: PropTypes.element,
    title: PropTypes.string,
  }),
  /**
   * Configuration to setup the utilities menu.
   */
  settingsConfig: PropTypes.shape({
    themes: PropTypes.arrayOf(PropTypes.string),
    selectedTheme: PropTypes.string,
    locales: PropTypes.arrayOf(PropTypes.string),
    selectedLocale: PropTypes.string,
    directions: PropTypes.arrayOf(PropTypes.string),
    selectedDirection: PropTypes.string,
  }),
  onUpdateSettings: PropTypes.func,
  contentConfig: PropTypes.shape({
    placeholder: PropTypes.node,
    content: PropTypes.object,
    menuItems: PropTypes.object,
  }).isRequired,
  /**
   * The navigation links to display within the menu in the toolbar.
   */
  // eslint-disable-next-line react/forbid-prop-types
  navigationItems: PropTypes.array,
  /**
   * The path to the sites index.
   */
  indexPath: PropTypes.string.isRequired,

  appsConfig: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string,
    file: PropTypes.string,
    basename: PropTypes.string,
    rootElementId: PropTypes.string,
  })),
  /**
   * Injected by react-router: represent where the app is now, where you want it to go,
   * or even where it was.
   */
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  /**
   * Injected by react-router: the object representing browser history.
   */
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object,

  disclosureManager: disclosureManagerShape.isRequired,
};

const defaultProps = {
  nameConfig: undefined,
  navigationItems: undefined,
  settingsConfig: undefined,
  location: undefined,
  history: undefined,
  onUpdateSettings: undefined,
  appsConfig: undefined,
};

class DevSiteNavigation extends React.Component {
  static propExistsAndChanged(nextProp, currentProp) {
    return nextProp !== undefined && nextProp !== currentProp;
  }

  static getActiveNavigationItemPath(location, navigationItems) {
    for (let i = 0, numberOfNavigationItems = navigationItems.length; i < numberOfNavigationItems; i += 1) {
      if (matchPath(location.pathname, navigationItems[i].path)) {
        return navigationItems[i].path;
      }
    }

    return undefined;
  }

  static getDerivedStateFromProps(newProps) {
    return {
      activeNavigationItemPath: DevSiteNavigation.getActiveNavigationItemPath(newProps.location, newProps.navigationItems),
    };
  }

  static scrollToALink(location) {
    if (!location || location.length < 2) {
      return;
    }
    const elementName = location.hash.slice(1);
    const element = document.getElementsByName(elementName);
    if (element[0]) {
      element[0].scrollIntoView();
    }
  }

  static launchSearch(key, { disclosureManager, history }) {
    disclosureManager.disclose({
      preferredType: 'modal',
      size: 'large',
      content: {
        key,
        component: (
          <Search
            onItemSelected={path => history.push(path)}
          />
        ),
      },
    });
  }

  static launchAppSwitcher(key, { disclosureManager, appsConfig }) {
    disclosureManager.disclose({
      preferredType: 'modal',
      size: 'tiny',
      content: {
        key,
        component: (
          <ApplicationSwitcher apps={appsConfig} />
        ),
      },
    });
  }

  static generateUtilityItems(appsConfig) {
    const utilityItems = [];
    if (appsConfig.length > 0) {
      utilityItems.push({
        icon: <IconTile />,
        key: 'terra-dev-site.application-switcher',
        text: 'Application Switcher',
        metaData: { func: DevSiteNavigation.launchAppSwitcher },
      });
    }
    return utilityItems;
  }

  constructor(props) {
    super(props);
    this.state = {
      activeNavigationItemPath: undefined,
    };

    this.handleNavigationItemSelection = this.handleNavigationItemSelection.bind(this);
    this.handleItemSelection = this.handleItemSelection.bind(this);
    this.handleSettingsSelection = this.handleSettingsSelection.bind(this);
  }

  componentDidMount() {
    const { location } = this.props;
    DevSiteNavigation.scrollToALink(location);
  }

  handleNavigationItemSelection(navigationItemKey) {
    const { history } = this.props;
    const { activeNavigationItemPath } = this.state;

    if (activeNavigationItemPath !== navigationItemKey) {
      history.push(navigationItemKey);
    }
  }

  handleItemSelection(key, metaData) {
    metaData.func(key, this.props);
  }

  handleSettingsSelection() {
    const {
      disclosureManager, settingsConfig, onUpdateSettings,
    } = this.props;
    disclosureManager.disclose({
      preferredType: 'modal',
      size: 'small',
      content: {
        key: 'terra-dev-site.settings',
        component: (
          <SettingsPicker
            config={settingsConfig}
            onChangeSettings={(settingsValues, dismissSettingsPicker) => {
              dismissSettingsPicker().then(() => {
                if (onUpdateSettings) {
                  onUpdateSettings(settingsValues);
                }
              });
            }}
          />
        ),
      },
    });
  }

  render() {
    const {
      nameConfig, navigationItems, contentConfig, indexPath, appsConfig,
    } = this.props;
    const { activeNavigationItemPath } = this.state;

    if (!activeNavigationItemPath) {
      return <NotFoundPage homePath={indexPath} />;
    }

    const pageMenuItems = contentConfig.menuItems[activeNavigationItemPath];
    const pageContent = contentConfig.content[activeNavigationItemPath];

    return (
      <ApplicationNavigation
        titleConfig={{
          title: nameConfig.title,
        }}
        navigationItems={navigationItems.map(item => ({
          key: item.path,
          text: item.text,
        }))}
        extensionItems={[
          {
            icon: <IconSearch />,
            key: 'terra-dev-site.search',
            text: 'Search',
            metaData: { func: DevSiteNavigation.launchSearch },
          },
        ]}
        onSelectExtensionItem={this.handleItemSelection}
        activeNavigationItemKey={activeNavigationItemPath}
        onSelectNavigationItem={this.handleNavigationItemSelection}
        // hero={<Image src={contentConfig.placeholderSrc} style={{ height: '50px', width: '50px' }} />}
        onSelectSettings={this.handleSettingsSelection}
        utilityItems={DevSiteNavigation.generateUtilityItems(appsConfig)}
        onSelectUtilityItem={this.handleItemSelection}
      >
        <DevSitePage
          placeholderSrc={contentConfig.placeholderSrc}
          menuItems={pageMenuItems}
          contentConfig={pageContent}
          rootPath={activeNavigationItemPath}
          key={activeNavigationItemPath}
          notFoundComponent={<NotFoundPage indexPath={indexPath} />}
        />
      </ApplicationNavigation>
    );
  }
}

DevSiteNavigation.propTypes = propTypes;
DevSiteNavigation.defaultProps = defaultProps;

export default withDisclosureManager(withRouter(DevSiteNavigation));