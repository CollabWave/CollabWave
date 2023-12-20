export const hexToHSL = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (result) {
    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);
    (r /= 255), (g /= 255), (b /= 255);
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h, s;
    const l = (max + min) / 2;
    if (max == min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
        default:
          h = 0;
      }
      h /= 6;
    }
    return {
      h,
      s,
      l,
    };
  } else {
    throw new Error('Non valid HEX color');
  }
};

export const hexToRGB = hex => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  return `${r}, ${g}, ${b}`;
};

export const makeUserAreaString = arr => {
  const newArr = arr.map(el => el.value);
  if (newArr.length === 0) {
    return ' ';
  }
  if (newArr.length === 1) {
    return `${newArr[0].charAt(0).toUpperCase() + newArr[0].slice(1)} blogger`;
  }
  if (newArr.length === 2) {
    return `${newArr[0].charAt(0).toUpperCase() + newArr[0].slice(1)} and ${newArr[1]} blogger`;
  }
  if (newArr.length > 2) {
    return `${newArr[0].charAt(0).toUpperCase() + newArr[0].slice(1)}, ${newArr
      .slice(1, -1)
      .join(', ')} and ${newArr[newArr.length - 1]} blogger`;
  }
};

export const addKeysToArray = arr => {
  return arr.map(item => {
    return { ...item, key: item.id };
  });
};

export const sortAgainstStatus = arr => {
  return arr.sort((a, b) => {
    const statusOrder = { active: 1, pending: 2, closed: 3 };

    return statusOrder[a.status] - statusOrder[b.status];
  });
};

export const getBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
