export type Entry = Record<string, any>;
const files = import.meta.glob<Entry>('../content/**/*.json', { eager: true, import: 'default' });
export function entries(collection: string, flag = 'visible'): Entry[] { return Object.entries(files).filter(([path, item]) => path.includes('/'+collection+'/') && item[flag] === true).map(([,item]) => item).sort((a,b)=>(a.order??0)-(b.order??0)); }
export function safeUrl(value: unknown): string { if(typeof value!=='string') return ''; if (/^\/(?!\/)/.test(value)||/^#[a-zA-Z]/.test(value)) return value; try { const u=new URL(value); return ['https:','http:'].includes(u.protocol)?value:''; } catch {return '';} }
export function date(value: string) { if(!value) return ''; const d=new Date(value.length===10?value+'T12:00:00Z':value); return Number.isNaN(d.valueOf())?'':new Intl.DateTimeFormat('en-CA',{dateStyle:'long',timeZone:'America/Toronto'}).format(d); }
