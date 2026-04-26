interface Props {
  data: Record<string, unknown>;
}

/**
 * Renders a `<script type="application/ld+json">` block. The payload is
 * JSON.stringify-ed and `<` is escaped to `<` so a stray "</script>"
 * inside any string value cannot break out of the script tag.
 */
export default function JsonLd({ data }: Props) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
