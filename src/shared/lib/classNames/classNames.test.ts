import { classNames } from "shared/lib/classNames/classNames"

describe('classnames test', ()=>{
    test('one arg', ()=>{
        expect(classNames('someclass', {}, [])).toBe('someclass')
    })
    test('with additional', ()=>{
        expect(classNames('someclass', {}, ['additionalClass'])).toBe('someclass additionalClass')
    })
    test('with mods', ()=>{
        expect(classNames('someclass', {"flexible": true, "convertable": false}, ['additionalClass']))
            .toBe('someclass additionalClass flexible')
    })
    test('with mod undefined', ()=>{
        expect(classNames('someclass', {"flexible": true, "convertable": undefined}, ['additionalClass']))
            .toBe('someclass additionalClass flexible')
    })
})