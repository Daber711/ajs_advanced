export default function orderByProps(obj, arr) {
	const tempArr = [];
	arr.forEach((key) => {
	  if (obj.hasOwnProperty(key)) {
		 tempArr.push({ key, value: obj[key] });
		 delete obj[key];
	  }
	});
	const tempObj = [];
	for (const key in obj) {
	  if (obj.hasOwnProperty(key)) {
		 tempObj.push({ key, value: obj[key] });
	  }
	}
	tempObj.sort((a, b) => a.key.localeCompare(b.key));
 
	const result = [...tempArr, ...tempObj];
 
	return result;
 }