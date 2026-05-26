import * as mc from "@minecraft/server";
import { world } from "@minecraft/server";

/**
 * @remarks This is the entry point for the codebase
 */
async function main() {

}
// Runs main on the next tick
mc.system.run(main);

const ItemFoodEffectsComponent = {
    onConsume({ itemStack, source }) {
        
        if (itemStack.typeId === "ac:red_candy") {
            source.addEffect("minecraft:strength", 200, {
                amplifier: 4, 
                showParticle: true, 
            });
            source.addEffect("minecraft:regeneration", 100, {
                amplifier: 1, 
                showParticle: false, 
            });
            source.addEffect("minecraft:weakness", 300, {
                amplifier: 2, 
                showParticle: true, 
            });
        }
    },
};

const ItemFoodEffectsComponent2 = {
    onConsume({ itemStack, source }) {
        
        if (itemStack.typeId === "ac:blue_candy") {
            source.addEffect("minecraft:speed", 200, {
                amplifier: 4, 
                showParticle: true, 
            });
            source.addEffect("minecraft:jump_boost", 200, {
                amplifier: 2, 
                showParticle: false, 
            });
            source.addEffect("minecraft:slow_falling", 200, {
                amplifier: 1, 
                showParticle: false, 
            });
            source.addEffect("minecraft:slowness", 300, {
                amplifier: 1, 
                showParticle: true, 
            });
        }
    },
};

const ItemFoodEffectsComponent3 = {
    onConsume({ itemStack, source }) {
        
        if (itemStack.typeId === "ac:orange_candy") {
            source.addEffect("minecraft:fire_resistance", 300, {
                amplifier: 4, 
                showParticle: true, 
            });
            source.addEffect("minecraft:wither", 40, {
                amplifier: 2, 
                showParticle: false, 
            });
        }
    },
};

world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent("ac:red_candy_effects", ItemFoodEffectsComponent);
    itemComponentRegistry.registerCustomComponent("ac:blue_candy_effects", ItemFoodEffectsComponent2);
    itemComponentRegistry.registerCustomComponent("ac:orange_candy_effects", ItemFoodEffectsComponent3);
});