import { CATALOGUE_UPDATED_AT, PROJECTS } from '../data/projects.mjs';

export const prerender = true;

export function GET() {
  return new Response(JSON.stringify({ name: 'Scrobbling project catalogue', version: '0.4', license: 'CC0-1.0', updatedAt: CATALOGUE_UPDATED_AT, projects: PROJECTS }, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}
