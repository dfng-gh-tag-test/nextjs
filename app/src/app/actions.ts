'use server';

export async function getSamples(){
    return await (await fetch('https://docs.defang.io/samples-v2.json')).json()
}