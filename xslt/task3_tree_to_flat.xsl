<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="text" encoding="utf-8"/>

  <xsl:template match="node">
    <xsl:text>"</xsl:text>
    <xsl:for-each select="ancestor-or-self::node">
      <xsl:value-of select="@name"/>
      <xsl:if test="position() != last()">/</xsl:if>
    </xsl:for-each>
    <xsl:text>"&#10;</xsl:text>

    <xsl:apply-templates select="node"/>
  </xsl:template>

</xsl:stylesheet>
