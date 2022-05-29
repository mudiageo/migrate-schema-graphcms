const { newMigration, FieldType, Renderer, RelationType } = require("@graphcms/management");

const migration = newMigration({ endpoint: "...", authToken: "..." });

const author = migration.createModel({
  apiId: "Author",
  apiIdPlural: "Authors",
  displayName: "Author",
});

author.addSimpleField({
  apiId: "firstName",
  displayName: "First Name",
  type: FieldType.String,
});
author.addSimpleField({
  apiId: "lastName",
  displayName: "Last Name",
  type: FieldType.String,
});

migration.run();
