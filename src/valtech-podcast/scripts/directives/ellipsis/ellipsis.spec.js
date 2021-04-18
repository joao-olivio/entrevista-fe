import { truncateString, defaultTruncateLength, ellipsis } from './ellipsis'

describe('truncate', () => {
  it('should not truncate the string if the length paramater is higher then the length of the string given', () => {
    const testString = 'Test string'

    expect(truncateString(testString, 20)).toBe(testString)
  })
  it('should not truncate the string if the length paramater is lower then the length of the string given', () => {
    const testString = 'Test string'
    const containsThreeDots = truncateString(testString, 5).indexOf('...') !== -1

    expect(containsThreeDots).toBe(true)
  })
  it(`should return a string with max the length of ${defaultTruncateLength} when a large string is supplied without a limit parameter`, () => {
    const testString = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid veniam, error asperiores quod reprehenderit illo, doloremque voluptates ut et consequatur, vitae odio! Ullam, numquam veniam necessitatibus tenetur magnam voluptate esse a beatae, quasi! Illo, nihil placeat perferendis veritatis, officiis quibusdam perspiciatis iure incidunt atque nam sit, qui tempore veniam? Quo doloribus maiores iusto molestias sint quisquam error. Iste corporis, autem, similique quia quibusdam facilis dignissimos. Numquam ab neque, esse eligendi atque, impedit nam nostrum ducimus tempora blanditiis tempore repellendus, adipisci, totam in! Ex dolorum reprehenderit incidunt ad eveniet quo vero numquam neque sed aliquam maiores quaerat sit eaque eos adipisci atque repellendus quia, repudiandae, illo assumenda exercitationem iure doloremque possimus magni. Repellendus, ipsam deserunt tempora, voluptas debitis illo nulla nam amet quos, saepe similique, esse totam. Voluptate obcaecati culpa, quidem doloribus voluptatem quisquam vel, magni perspiciatis nemo repellendus nostrum amet quo. Quas laudantium architecto, fugit voluptates esse libero expedita ad possimus rem facilis, porro aspernatur aliquid! Veniam et commodi quia tenetur quod voluptas. Autem dolor ab dolorum sunt saepe, aliquam et maxime sed veritatis quasi aut expedita recusandae id eos distinctio ullam a, accusantium assumenda non quaerat nesciunt ipsa nam rem. Nobis ipsum inventore, cum, impedit iste quae numquam voluptatibus.'
    const result = truncateString(testString)
    const containsThreeDots = result.indexOf('...') !== -1

    expect(containsThreeDots).toBe(true)
    expect(result.length).toBeLessThan(defaultTruncateLength + 1)
  })
})

describe('ellipsis', () => {
  it('should have a bind fn', () => {
    expect(typeof ellipsis.bind).toBe('function')

    const dummyElement = document.createElement('div')
    dummyElement.innerHTML = 'asda sd asd asd a sd sad'
    ellipsis.bind(dummyElement, { expression: 5 })

    expect(dummyElement.innerHTML.indexOf('...')).not.toBe(-1)
  })
})
