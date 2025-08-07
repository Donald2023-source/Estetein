import { type SchemaTypeDefinition } from 'sanity'
import Location from '../Shema/Location'
import Category from '../Shema/Category'
import House from '../Shema/House'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Location, Category, House],
}
