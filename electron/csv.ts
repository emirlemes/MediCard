export function escapeCsv(value: unknown) {
  const text = String(value ?? '').replace(/\r?\n/g, ' ')
  return /[",;]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text
}

export function csvDocument(headers: string[], rows: unknown[][]) {
  const header = headers.map(escapeCsv).join(';')
  const body = rows.map((row) => row.map(escapeCsv).join(';')).join('\n')
  return `\ufeff${header}\n${body}`
}
