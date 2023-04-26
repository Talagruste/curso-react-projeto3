import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora mollitia consequatur, dignissimos vel voluptates deserunt id numquam eligendi
    consequuntur culpa in natus qui, saepe, voluptatum dicta corrupti fuga nam similique.`,
  },
  argsType: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
