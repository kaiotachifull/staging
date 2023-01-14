const PASS = '635e5d635486481630307f4352910cc6a7208eaf44900be63c4a3059edcfe72b';

const sha256 = async (text) => {
    const uint8  = new TextEncoder().encode(text);
    const digest = await crypto.subtle.digest('SHA-256', uint8);
    return Array.from(new Uint8Array(digest)).map(v => v.toString(16).padStart(2,'0')).join('');
}

export const aush = async (inputPass) => {
    const hash = await sha256(inputPass);
    return hash === PASS;
}
