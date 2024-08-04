export function push(name){
  let breadcrumbs = JSON.parse(localStorage.getItem('breadcrumbs') || '[]');
  breadcrumbs = [
    ...breadcrumbs,
    name
  ]
  localStorage.setItem('breadcrumbs', JSON.stringify(breadcrumbs));
}

export function set(history){
  let breadcrumbs = JSON.parse(localStorage.getItem('breadcrumbs') || '[]');
  breadcrumbs = history
  localStorage.setItem('breadcrumbs', JSON.stringify(breadcrumbs));
}

export function getHistory(){
  return JSON.parse(localStorage.getItem('breadcrumbs' || '[]'));
}
