import _ from 'lodash';

export default [
  {
    key: 'multiple',
    ignore: true,
  },
  {
    key: 'dataSrc',
    data: {
      values: [
        { label: 'Values', value: 'values' },
        { label: 'URL', value: 'url' },
      ],
    },
    'validate': {
      'required': true
    },
    onChange(context) {
      if (context && context.flags && context.flags && context.flags.modified) {
        context.data.values = [{ label: '', value: '' }];
      }
    },
  },
  {
    type: 'datagrid',
    input: true,
    label: 'Values',
    key: 'values',
    tooltip: 'The radio button values that can be picked for this field. Values are text submitted with the form data. Labels are text that appears next to the radio buttons on the form.',
    weight: 10,
    reorder: true,
    defaultValue: [{ label: '', value: '', nextSlideId: '' }],
    components: [
      {
        label: 'Label',
        key: 'label',
        input: true,
        type: 'textfield',
      },
      {
        label: 'Value',
        key: 'value',
        input: true,
        type: 'textfield',
        allowCalculateOverride: true,
        calculateValue: 'value = _.camelCase(row.label);',
        validate: {
          required: true
        }
      },
      {
        type: 'textfield',
        input: true,
        weight: 180,
        label: 'Go to slide',
        key: 'nextSlideId',
        tooltip: 'The user\'s next slide will change to this when selecting this option.',
      },
    ],
    conditional: {
      json: { '===': [{ var: 'data.dataSrc' }, 'values'] },
    },
  },
  {
    key: 'template',
    conditional: {
      json: { '===': [{ var: 'data.dataSrc' }, 'url'] },
    },
  }
];
