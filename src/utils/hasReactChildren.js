function hasReactChildren(children, slotName) {
    return React.Children.toArray(children).some(child => {
        return child.props && child.props.slot === slotName;
    });
}

export {
    hasReactChildren
}
