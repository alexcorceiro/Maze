import {readFileSync, readdirSync } from 'fs';
import  '../data/maps';
import struc from  './struc';

const fs = require('fs')
const struc = require('./struc');
const docs  = readdirSync('data/maps');
const rect = fs.readFileSync('data/maps/' + docs[1], 'utf-8');
const docsasarray = rect.split("\n")
const s = new struc(width, height, grid);
const sortie = s.grid.map(line => line.join("")).join("\n")

let xstart = -1;
let yend = -1;
//let mur = 1;
//let space = null;
//let player = 0;

const fileAsArray = docsasarray.forEach((line, key) => {
    if (line == fileAsArray.isempty.isEmpty) {
      return true;
    } else {
      const arrayLine = line;
      arrayLine.find(e => {
        if (e === "1") {
          e = key;
        }
        if (e === "2") {
          e = key;
        }
      });
    }
  });

  function Game(width, height, docsasarray ) {
    let [width, height] = docsasarray[0].split("x")
  
      const grid = docsasarray.slice(1).map((line) => {
      return line.split(space)
    })

  }

  for(let y = 0; y < height; y++ ){
    const z = grid[y]
    const x =z.indexOf("1")

    if(x != -1){
      xstart = x
      yend = y
      break
    }

    if(height === undefined){
      width = docsasarray.length
      height = grid[0].length
    }
    s.findSort(xstart, yend)
    console.log('you win !!!', sortie);
  }
 
  Game(docsasarray);