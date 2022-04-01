class struc{
    constructor(width, height, grid) {
        this.start = "1"
        this.end = "2"
        this.mur = "*"
        this.chemin = "."
        this.space = " "
        this.grid = grid
        this.width = width
        this.height = height

        
    }
    
    push(chemin) {
      this.space.push(chemin);

        return this
    }
    
    pop() {
        return this.space.pop();
    }

    isempty() {
        return this.space.length === 0 
    }
    
    findSort(x, y) {
        if (this.isOutside(x, y)) {
            return false
        }

        if (this.Sort(x, y)) {
            return true
        }

        if (this.Stop(x, y)) {
            return false
        }

        if (!this.isOpen(x, y)) {
            return false
        }

        this.setValue(x, y, this.chemin)


        if (this.findSort(x, y - 1)) {
            return true
        }
        if (this.findSort(x + 1, y)) {
            return true
        }

        if (this.findSort(x, y + 1)) {
            return true
        }

        if (this.findSort(x - 1, y)) {
            return true
        }

        this.setValue(x, y, this.space)
        return false
    }

  

    Sort(x, y) {
        return this.Values(x, y) === this.end
    }

    Stop(x, y) {
        return this.Values(x, y) === this.mur
    }

    isOpen(x, y) {
        if (this.Values(x, y) == this.space) {
            return true
        }

        if (this.Values(x, y) == this.start) {
            return true
        }

        return false
    }
    isOutside(x, y) {
        if (x >= this.width || x < 0) {
            return true
        }

        if (y >= this.height || y < 0) {
            return true
        }

        return false
    }
    Values(x, y) {
        return this.grid[y][x]
    }

    setValue(x, y, value) {
        if (this.Values(x, y) != this.start) {
            this.grid[y][x] = value
        }
    }
}



module.exports = struc;