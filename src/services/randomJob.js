export class Job {
    #name;
    #emojiId;
    constructor(name, emojiId) {
        this.#name = name;
        this.#emojiId = emojiId;
    }
    GetName() {
        return this.#name;
    }
    GetEmojiId() {
        return this.#emojiId;
    }
}
const categories = ['tank', 'healer', 'dps', 'melee', 'ranged', 'caster'];
export const tankPool = [
    new Job('pld', '<:pld:1231445908604850186>'),
    new Job('war', '<:war:1231446013919625286>'),
    new Job('drk', '<:drk:1231446046471753738>'),
    new Job('gnb', '<:gnb:1231446062443532298>')
];
export const healerPool = [
    new Job('whm', '<:whm:1231446129531682897>'),
    new Job('sch', '<:sch:1231446142592614460>'),
    new Job('ast', '<:ast:1231446155561271439>'),
    new Job('sge', '<:sge:1231446168349839462>'),
];
export const meleePool = [
    new Job('mnk', '<:mnk:1231446284150509670>'),
    new Job('drg', '<:drg:1231446257113890937>'),
    new Job('nin', '<:nin:1231446297471615016>'),
    new Job('sam', '<:sam:1231446338986708992>'),
    new Job('rpr', '<:rpr:1231446310222172241>'),
];
export const rangedPool = [
    new Job('brd', '<:brd:1231446216751972434>'),
    new Job('mch', '<:mch:1231446270543921222>'),
    new Job('dnc', '<:dnc:1231446243973136445>'),
];
export const casterPool = [    
    new Job('blm', '<:blm:1231446229200797698>'),
    new Job('smn', '<:smn:1231446351372357754>'),
    new Job('rdm', '<:rdm:1231446326894530560>'),
];
export const dpsPool = meleePool.concat(rangedPool, casterPool);
export const jobPool = tankPool.concat(tankPool, healerPool, dpsPool);

export function GetRandomJob(args = null) {
    if (!args) {
        return jobPool[Math.floor(Math.random() * jobPool.length)].GetEmojiId();
    }
    const params = args.toLowerCase().split('/');
    for (let i = 0; i < params.length; i++) {
        if(!jobPool.some(element => element.GetName() === params[i] || categories.includes(params[i]))) {
            return null;
        }
    }
    const pool = CreateJobPool(params);
    return pool[Math.floor(Math.random() * pool.length)].GetEmojiId();
}
export function CreateJobPool(params) {
    let pool = [];
    params.forEach(element => {
        switch(element) {
            case 'tank':
                pool = pool.concat(tankPool);
                break;
            case 'healer':
                pool = pool.concat(healerPool);
                break;
            case 'dps':
                pool = pool.concat(dpsPool);
                break;
            case 'melee':
                pool = pool.concat(meleePool);
                break;
            case 'ranged':
                pool = pool.concat(rangedPool);
                break;
            case 'caster':
                pool = pool.concat(casterPool);
                break;
            default:
                pool = pool.concat(jobPool.find((e) => e.GetName() === element));
                break;
        }
    });
    return pool;
}