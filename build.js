const builder = require('electron-builder')
const Platform = builder.Platform

function getCurrentPlatform() {
    switch (process.platform) {
        case 'win32':
            return Platform.WINDOWS
        case 'darwin':
            return Platform.MAC
        case 'linux':
            return Platform.linux
        default:
            console.error('Cannot resolve current platform!')
            return undefined
    }
}

builder.build({
    targets: (process.argv[2] != null && Platform[process.argv[2]] != null ? Platform[process.argv[2]] : getCurrentPlatform()).createTarget(),
    config: {
        appId: 'Galaxiat RPC',
        productName: 'GalaxiatRPC',
        artifactName: '${productName}-${version}.${ext}',
        copyright: 'Copyright © 2018-2021 GeekCorner',
        directories: {
            buildResources: 'build',
            output: 'dist'
        },
        win: {
            target: [{
                    target: 'nsis',
                    arch: ['x64', 'ia32']
                },
                {
                    target: 'portable',
                    arch: ['x64', 'ia32']
                },
                {
                    target: 'msi',
                    arch: ['x64', 'ia32']
                }
            ]
        },
        nsis: {
            oneClick: false,
            perMachine: false,
            allowElevation: true,
            allowToChangeInstallationDirectory: true,
            artifactName: '${productName}-${version}-setup-${arch}.${ext}'
        },
        portable: {
            artifactName: '${productName}-${version}-protable.${ext}'
        },
        mac: {
            target: [{
                    target: 'dmg',
                    arch: ['x64', 'arm64'],
                },
                {
                    target: 'pkg',
                    arch: ['x64', 'arm64'],
                }
            ],
            category: 'public.app-category.social-networking'
        },
        dmg: {
            artifactName: '${productName}-${version}-${arch}.${ext}'
        },
        pkg: {
            artifactName: '${productName}-${version}-setup-${arch}.${ext}'
        },
        linux: {
            target: ['AppImage', 'deb', 'rpm', 'snap'],
            maintainer: 'GeekCorner',
            vendor: 'GeekCorner',
            synopsis: 'RPC Discord pour Galaxiat',
            description: 'RPC Discord pour Galaxiat',
            category: 'Office'
        },
        appImage: {
            artifactName: '${productName}-${version}-appimage.${ext}'
        },
        deb: {
            artifactName: '${productName}-${version}-deb.${ext}'
        },
        rpm: {
            artifactName: '${productName}-${version}-rpm.${ext}'
        },
        snap: {
            artifactName: '${productName}-${version}-snap.${ext}'
        },
        compression: 'maximum',
        files: [
            '!{dist,.gitignore,.vscode,docs,dev-app-update.yml,.travis.yml,.nvmrc,.eslintrc.json,build.js}'
        ],
        extraResources: [
            'libraries'
        ],
        asar: true
    }
}).then(() => {
    console.log('Build complete!')
}).catch(err => {
    console.error('Error during build!', err)
})