<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="text" encoding="utf-8"/>

  <xsl:template name="generate-sequence">
    <xsl:param name="M" />
    <xsl:param name="current" select="0" />

    <xsl:value-of select="$current" />

    <xsl:if test="$current &lt; $M">
      <xsl:text> </xsl:text>
      <xsl:call-template name="generate-sequence">
        <xsl:with-param name="M" select="$M" />
        <xsl:with-param name="current" select="$current + 1" />
      </xsl:call-template>
    </xsl:if>
  </xsl:template>

  <xsl:template match="/">
    <xsl:call-template name="generate-sequence">
      <xsl:with-param name="M" select="15" />
    </xsl:call-template>
  </xsl:template>

</xsl:stylesheet>
