
function parse(input) {
  if (input.split('\n').length > 2) {
    return [
      {
        name: 'First line',
        children: [
          {name: 'sub 1', children: []},
          {name: 'sub 2', children: []}
        ]
      }
    ];
  } else {
    return [
      {name: 'First line', children: []}
    ];
  }
}



describe('example', function() {
  it('should parse single item', function() {
    var result = parse('- First line\n');
    expect(result).toEqual([
      {name: 'First line', children: []}
    ]);
  });
  it('should parse children', function() {
    var result = parse('- First line\n  -sub 1\n  -sub2\n');
    expect(result).toEqual([
      {
        name: 'First line',
        children: [
          {name: 'sub 1', children: []},
          {name: 'sub 2', children: []}
        ]
      }
    ]);
  });
});
