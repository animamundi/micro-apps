module.exports = {
  name: 'dodo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/dodo',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
