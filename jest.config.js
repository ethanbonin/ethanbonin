// eslint-disable-next-line no-undef
module.exports = {
    setupFilesAfterEnv: ["./jest.setup.js"],
    moduleNameMapper: {
        "^@stories(.*)$": "<rootDir>/stories$1", // connects all the components to jest for easy import
        "^.+\\.(css|less)$": "<rootDir>/CSSStub.js" // Connects the css to jest
    },
}