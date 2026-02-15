import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    name?: string;
    type?: string;
}

export const SEO = ({ title, description, name = 'openl4bs', type = 'website' }: SEOProps) => {
    useEffect(() => {
        document.title = title;

        const setMetaTag = (attr: string, key: string, content: string) => {
            let element = document.querySelector(`meta[${attr}="${key}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attr, key);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        setMetaTag('name', 'description', description);
        setMetaTag('property', 'og:type', type);
        setMetaTag('property', 'og:title', title);
        setMetaTag('property', 'og:description', description);
        setMetaTag('name', 'twitter:creator', name);
        setMetaTag('name', 'twitter:card', type);
        setMetaTag('name', 'twitter:title', title);
        setMetaTag('name', 'twitter:description', description);

    }, [title, description, name, type]);

    return null;
};
