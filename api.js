import axios from 'axios';
export async function fetchVerse(apiUrl, book, chapter, verse, lang){ if(!apiUrl) return null; try{ const res = await axios.get(apiUrl, { params:{book,chapter,verse,lang} }); return res.data?.text || null; }catch(e){ console.error(e); return null;} }
