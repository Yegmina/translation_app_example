 /* basic functions from my js template */


 /*Not in use*/







 /*get value or element functions*/
export function getValueByName(local_name) {
  const element = getElement('name', local_name);
  return element ? element.value : null;
}

export function getValueById(local_id) {
  const element = getElement('id', local_id);
  return element ? element.value : null;
}

export function getValueByTagName(local_tag) {
  const element = getElement('tag', local_tag);
  return element ? element.value : null;
}

export function getValueByClassName(local_class) {
  const element = getElement('class', local_class);
  return element ? element.value : null;
}


export function getElement(selector, value) {
  let elements;

  switch (selector) {
    case 'name':
      elements = document.querySelectorAll(`[name="${value}"]`);
      break;
    case 'id':
      elements = document.querySelectorAll(`#${value}`);
      break;
    case 'tag':
      elements = document.querySelectorAll(value);
      break;
    case 'class':
      elements = document.querySelectorAll(`.${value}`);
      break;
    default:
      console.log(`Unknown selector type: ${selector}`);
      return null;
  }

  if (elements.length === 0) {
    console.log(`No element found with ${selector}: ${value}`);
    return null;
  } else if (elements.length > 1 && selector !== 'id') {
    console.log(`Unexpected duplicates with the same ${selector}: ${value}`);
    return elements;
  } else if (elements.length > 1 && selector === 'id') {
    console.error(`Multiple elements with the same id found: ${value}. Please fix the HTML. It is strongly recommended to have unique id to avoid errors`);
    return elements[0];
  }

  return elements[0];
}
