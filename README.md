# JB-App

Mobile application of [JB-Online](https://github.com/NJUCSE17/JB-Online). Built with React Native and Expo.

Legacy (Java) version of this app can be found at [JB-App-Legacy](https://github.com/NJUCSE17/JB-App-Legacy), but it is no longer maintained.

> There will NOT be an PUBLIC iOS version unless, 1) a secure PAID Apple Developer ID is provided to the maintainer or to the elite class by a classmate, or 2) Expo and related SDKs are ejected and the project is built on one's own, or are deprecated and replaced with alternatives in the project.

## Getting Started

### Project Structure

```
+-assets     -> Save fonts and images
|-components -> Reusable single components
|-constants  -> Theme, style and other constants
|-navigation -> Routes and navigation config
|-screens    -> Screens of navigation
|-services   -> API and its config
|-App.js     -> Main entrance of this app
`-app.json   -> APP related config
```

### Run, Test and Build

- Please use yarn instead of npm as package manager.
- Run `yarn start` or `expo start` to start development server.
- Keep `/services/config.json` excluded from git.
- Run `expo build:[platform]` to build a standalone app.

References:

- [React Native documentation](https://facebook.github.io/react-native/docs/getting-started.html)
- [Expo documentation](https://docs.expo.io/)
- [Native Base documentation](https://docs.nativebase.io)

### JavaScript is Bad!

You can use TypeScript instead. We are considering changing all JS files to TS.

## License and Credit

JB-App is MIT licensed.

Credits to

- [Axios](https://github.com/axios/axios)
- [Expo](https://expo.io) and Expo SDK
- [js-base64](https://github.com/dankogai/js-base64) by dankogai
- [Native Base](https://github.com/GeekyAnts/NativeBase) by GeekyAnts
- [qs](https://github.com/ljharb/qs) by ljharb
- [React Native](https://github.com/facebook/react-native) by Facebook
- Icon from FlatIcon and FontAwesome