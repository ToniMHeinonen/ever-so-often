# Ever So Often

App for reminding you what to do ever so often.

[Download app from Google Play](https://play.google.com/store/apps/details?id=com.tonimheinonen.eversooften)

Are you doing something every other day? Or maybe every third day? With this app you can easily track your activities which occur at regular intervals.

### Example Reminder

- Start Date: 2023/01/01 (year/month/day)
- Time Frame: 3
- Day 1: Jogging
- Day 2: Gym

In this example, day 2023/01/01 is jogging, day 2023/01/02 is gym, day 2023/01/03 is nothing and day 2023/01/04 is jogging again. This repeats infinitely when End Date is not defined.

**App is currently under production, so it is very bare bones. New features will be added later.**

## Installing project and running it on Android emulator

- Clone project
- Run `yarn install`
- Setup Android emulator ([Instructions](https://docs.expo.dev/workflow/android-studio-emulator/))
- Run `emulator -avd {emulator_name}` (list all available devices: `emulator -list-avds`)
- Run `yarn start`
- Press `a` when metro has started

It is recommended to use [React Native Debugger](https://github.com/jhen0409/react-native-debugger) for debugging React Native projects.

## Author

Toni Heinonen

- Email: toni1.heinonen@gmail.com

- GitHub: [ToniMHeinonen](https://github.com/ToniMHeinonen)
