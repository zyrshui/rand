class Rand {

    static rand_seed: DataView = new DataView(new ArrayBuffer(4));
    static M: number = 0x7FFFFFFF;
    static Seed(seed: number) {
        
        Rand.rand_seed.setUint32(0, seed);
        console.log(Rand.M);
    }

    static Rand():number{ 
        Rand.rand_seed.setUint32(0, (Rand.rand_seed.getUint32(0) * 0x41A7));   
        Rand.rand_seed.setUint32(0, Rand.rand_seed.getUint32(0) % Rand.M);
        return Rand.rand_seed.getUint32(0);
    }
    
    static RandMax(max:number): number {
        return Rand.Rand() % max;
    }
    
}
