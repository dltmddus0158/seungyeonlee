export function goto(page, sectionId = null) {
  window.location.href = `${page}.html${sectionId ? `#${sectionId}` : ''}`;
}