export function getGlobalState() {
    // 判断当前设备
    const device = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) ? 'MOBILE' : 'DESKTOP';
    const collapsed = device !== 'DESKTOP'
    return {
        device,
        collapsed
    } as const 
}