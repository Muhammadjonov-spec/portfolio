import mongoose from 'mongoose';
import Project from '../src/models/Project.model.js';
import User from '../src/models/User.model.js';
import util from 'util';

function inspectModel(model){
  const schema = model.schema;
  console.log(`\nModel: ${model.modelName}`);
  Object.entries(schema.paths).forEach(([name, path]) =>{
    const hasCaster = !!path.caster;
    const casterInfo = path.caster ? (`caster.instance=${path.caster.instance}`) : 'no caster';
    console.log(`${name}: instance=${path.instance} | ${casterInfo}`);
  })
}

inspectModel(Project);
inspectModel(User);


console.log('\nDetailed technologies path (selective):');
const techPath = Project.schema.paths['technologies'];
console.log('instance:', techPath.instance);
console.log('options keys:', Object.keys(techPath.options || {}));
console.log('has caster:', typeof techPath.caster !== 'undefined');
if (techPath.caster) {
  console.log('caster.instance:', techPath.caster.instance);
  console.log('caster.options keys:', Object.keys(techPath.caster.options || {}));
}
if (techPath.embeddedSchemaType) {
  console.log('embeddedSchemaType.constructor.name:', techPath.embeddedSchemaType.constructor && techPath.embeddedSchemaType.constructor.name);
  console.log('embeddedSchemaType.instance:', techPath.embeddedSchemaType.instance);
  console.log('embeddedSchemaType.options keys:', Object.keys(techPath.embeddedSchemaType.options || {}));
}
console.log('path constructor name:', techPath.constructor && techPath.constructor.name);
console.log('own property names:', Object.getOwnPropertyNames(techPath).slice(0,50));

process.exit(0);
