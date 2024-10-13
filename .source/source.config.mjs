// source.config.ts
import { defineDocs } from "fumadocs-mdx/config";
var { docs: docsData, meta: docsMeta } = defineDocs({
  docs: { dir: "./content/docs" }
});
var { docs: legalDocs, meta: legalMeta } = defineDocs({
  docs: { dir: "./content/legal" }
});
export {
  docsData,
  docsMeta,
  legalDocs,
  legalMeta
};
