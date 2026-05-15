<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="xml" indent="yes" encoding="utf-8"/>

  <xsl:key name="itemsByGroup" match="item" use="@group"/>

  <xsl:template match="/">
    <groups>
      <xsl:for-each select="list/item[generate-id() = generate-id(key('itemsByGroup', @group)[1])]">
        <group name="{@group}">
          <xsl:for-each select="key('itemsByGroup', @group)">
            <item name="{@name}"/>
          </xsl:for-each>
        </group>
      </xsl:for-each>
    </groups>
  </xsl:template>

</xsl:stylesheet>
