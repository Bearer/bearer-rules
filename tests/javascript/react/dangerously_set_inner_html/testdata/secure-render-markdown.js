getInfoContent = ({ expect }) =>
  const { panel } = this.props;
  const description = panel.description
  const markdown = renderMarkdown(description);

  return (
    <div dangerouslySetInnerHTML={{ __html: markdown }} />
  );
};