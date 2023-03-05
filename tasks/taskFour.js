const obj = {
    name: 'steve',
    gamemode: 'creative',
    mission: 'defeat the dragon',
    weapon: 'bed'
};
export let map = new Map(Object.entries(obj))
export const mapMethods = {
    map: Object.fromEntries(Object.entries(obj)),
    mapSet(key, value) {
        this.map[key] = value;
    },
    mapGet(key) {
        return this.map[key];
    },
    mapHas(key) {
        return key in this.map;
    },
    mapDelete(key) {
        if (this.mapHas(key)) {
            delete this.map[key];
            return true;
        }
        return false;
    },
    mapClear() {
        Object.keys(this.map).forEach(key => {
            delete this.map[key];
        });
    },
    mapSize() {
        return Object.keys(this.map).length;
    }
};