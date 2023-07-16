import { count } from './counter'
import _ from 'lodash-es'

console.log(count)
console.log('lodash', _)
console.log('import.meta.env\n', import.meta.env)
const BASE_URL = import.meta.env.MEI_TUAN_BASE_URL
console.log('BASE_URL:\n', BASE_URL)
