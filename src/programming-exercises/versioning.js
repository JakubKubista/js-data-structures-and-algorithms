function versionIncrement(currentVersion, i=1) {
  let newVersion = currentVersion.split('.');
  const len = newVersion.length;
  if (newVersion[len-i] !== '9') {
    newVersion[len-i] = Number(newVersion[len-i]) + 1;
    return newVersion.join(".");
  } else {
    newVersion[len-i] = 1;
    return versionIncrement(newVersion.slice(0, len-1).join(".") + ".1", i+1);
  }
}

console.log(versionIncrement("1.8.9.3"), "1.8.9.4");
console.log(versionIncrement("6.3.3.9"), "6.3.4.1");
console.log(versionIncrement("2.2.2.2"), "2.2.2.3");
console.log(versionIncrement("3.3.9.9"), "3.4.1.1");
