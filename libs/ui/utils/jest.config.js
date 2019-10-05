module.exports = {
  name: 'ui-utils',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/utils',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
