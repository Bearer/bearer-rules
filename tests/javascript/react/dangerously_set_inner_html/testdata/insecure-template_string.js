function GetListItem(input) {
	<li
		className={"foobar"}
// bearer:expected javascript_react_dangerously_set_inner_html
		dangerouslySetInnerHTML={{ __html: `<a href=${input}>home page</a>` }}
	/>;
}
