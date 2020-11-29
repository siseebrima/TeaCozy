name = `Ebrima Sise`;


for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
    
}

address = `I live in Sinchu`
text = name.concat(' ',address);

console.log(text.includes('livei'));
console.log(text.endsWith(`inchu`));

console.log(text.replace(`live`, `reside`));
console.log(text.slice(0, 6));
console.log(text.split(` `));

console.log(text.substr(7));