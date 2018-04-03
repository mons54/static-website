export default ({}, inject) => {
  inject('head', (head = {}) => {
    const ogTitle = head.meta.find(value => value.hid === 'og:title');
    if (head.title && !ogTitle) {
      head.meta.push({
        hid: 'og:title', 
        property: 'og:title', 
        content: head.title
      });
    }
    if (head.meta instanceof Array) {
      const description = head.meta.find(value => value.hid === 'description');
      const ogDescription = head.meta.find(value => value.hid === 'og:description');
      if (description && !ogDescription) {
        head.meta.push({
          hid: 'og:description', 
          property: 'og:description', 
          content: description.content 
        });
      }
    }
    return head;
  });
};