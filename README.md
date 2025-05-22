## Testing

Using **Vitest** as the test runner and **React Testing Library** for testing React components.

### Dev Dependencies

npm install --save-dev vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event

# RPF software engineer: technical challenge

![A cartoon of a chicken sailing in a dinghy](./public/chicken-dinghy-6.jpg)

This is a React front-end app for a shop that sells sailing dinghies for chickens.

The instructions for the technical challenge are in [TASK.md](./TASK.md)

## Getting started

Firstly clone the repo from GitHub

```
git clone https://github.com/RaspberryPiFoundation/chicken-sailors/
```

Next you'll want to install NodeJS and `npm`, and then install the dependencies
```
npm install
```

The to start the app run
```
npm run dev
```
You should now be able to see the app at http://localhost:5173

When you make changes to your code, or stylesheets, the app should automatically reload.  If that doesn't happen you can hit `ctrl+c` in your console to stop the webserver, and you can then restart it.

## Layout

The code is laid out in a fairly standard way, with pages in `src/pages`, and components used on those pages in `src/components`.  There are some UI components in `src/components/ui` which you are free to use, although they're undocumented.

