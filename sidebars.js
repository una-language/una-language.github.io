module.exports = {
  doc: [
    '01_install',
    '02_essentials',
    '03_application',
    '04_abstraction',
    {
      'Data types': ['05_basic_types', '06_list', '07_map']
    },
    {
      Operators: [
        '08_arithmetical',
        '09_logical',
        '10_comparison',
        '11_conditional',
        '12_string_interpolation'
      ]
    },
    {
      Symmetries: [
        {
          Synchronous: ['13_sync_right', '14_sync_left'],
          Asynchronous: ['15_async_right', '16_async_left'],
          Error: ['17_error_right', '18_error_left'],
          Chaining: ['19_chaining_right', '20_chaining_left'],
          Module: ['21_module_right', '22_module_left']
        }
      ]
    },
    '23_jsx'
    // {
    //   Syntax: [
    //     'syntax_assignment',
    //     'syntax_arithmetical',
    //     'syntax_comparison',
    //     'syntax_conditional',
    //     'syntax_string_interpolation',
    //     'syntax_collections',
    //     'syntax_symmetry_sync',
    //     'syntax_symmetry_async',
    //     'syntax_symmetry_module',
    //     'syntax_symmetry_error',
    //     'syntax_symmetry_chaining',
    //     'syntax_react'
    //   ]
    // }
  ]
}
