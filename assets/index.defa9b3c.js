import{s as c}from"./vendor.f5225f2d.js";const l=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}};l();const u=async o=>{if(!o&&(o=new URLSearchParams(window.location.search).get("url"),!o))throw"Please provide a url to convert";const t=await fetch(o);if(console.log(t),t.status!==200)throw`Invalid url ${t.url}`;const n=await t.text();if(!n||n.length===0)throw`Invalid url ${t.url}`;const s=new c.Converter({ghCompatibleHeaderId:!0,simpleLineBreaks:!0,ghMentions:!0,tables:!0});return s.setFlavor("github"),s.makeHtml(n)},a=async o=>{try{return await u(o)}catch(t){const n=prompt(t);return await a(n)}};(async()=>{const o=await a(null),t=document.querySelector("#content");t.innerHTML=o})();
