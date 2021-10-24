import React from 'react';

/*
 * function getElementFromKey
 *
 * Get React Element from props
 *
 * If props have <SomeComponent key="some" />,
 * You can get this component by specifying @key=some
 *
 * return ReactElement whose key === @key
 *
 */

const getElementFromKey = (
  items: React.ReactElement[],
  key: string,
): React.ReactElement => {
  const element = items.find((item: React.ReactElement) => item?.key === key);

  if (!element) throw new Error(`Element '${key}' is not found.`);

  return element;
};

/*
 * function getElementsFromKeys
 *
 * Iterate getElementKey Function by Array of key(string)
 *
 * return ReactElements
 *
 */

const getElementsFromKeys = <T extends string>(
  items: React.ReactElement[],
  keys: T[],
): React.ReactElement[] => {
  return keys.map((key) => getElementFromKey(items, key));
};

export { getElementFromKey, getElementsFromKeys };
