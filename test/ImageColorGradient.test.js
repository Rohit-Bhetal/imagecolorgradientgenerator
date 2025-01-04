import {imageGradientGenerator} from '../ImageColorGradient'

describe('ColorPalleteGenerator',()=>{
    test('should extract image and generate color palette',async()=>{
        const colors = await imageGradientGenerator('./test/1.jpg')
        expect(colors).toHaveLength(2);
        colors.forEach(element => {
            expect(typeof element).toBe('string')
        });
        colors.forEach(element => {
            expect(element[0]).toBe('#')
        });
    })
})