const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'GetTheAudience docs',
    tagline: 'Developing your Twitter audience, effectively',
    url: 'https://docs.gettheaudience.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/icons/favicon-32x32.png',
    organizationName: 'GetTheAudience', // Usually your GitHub org/user name.
    projectName: 'documentation', // Usually your GitHub repo name.
    trailingSlash: true,
    themeConfig: {
        navbar: {
            title: 'Home',
            logo: {
                alt: 'GetTheAudience Logo',
                src: 'img/logo-header.svg',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Docs',
                },
                {
                    href: 'https://app.gettheaudience.com/1',
                    label: 'Go to the app',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Tutorial',
                            to: '/docs/intro',
                        },
                    ],
                },
                {
                    title: 'GetTheAudience',
                    items: [
                        {
                            label: 'Login',
                            href: 'https://app.gettheaudience.com/1',
                        },
                        {
                            label: 'Website',
                            href: 'https://gettheaudience.com',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/GetTheAudience',
                        },
                    ],
                },
                {
                    title: 'The Audience Explorer Podcast',
                    items: [
                        {
                            label: 'Episodes',
                            href: 'https://audience-explorer.transistor.fm/',
                        },
                        {
                            label: 'Transcripts',
                            href: 'https://gettheaudience.com/blog',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Docs on GitHub',
                            href: 'https://github.com/GetTheAudience/documentation',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Matthias Bohlen.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/GetTheAudience/documentation/edit/main/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
